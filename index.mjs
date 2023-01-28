/*!
    @e53e04ac/argv/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').Argv.Constructor} */
const constructor = ((options) => {

    const _options = ({
        argv: hold(() => {
            return unwrap(options.argv);
        }),
    });

    /** @type {import('.').Argv._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        stringToBoolean: ((stringValue) => {
            if (stringValue === 'true') {
                return true;
            }
            if (stringValue === 'false') {
                return false;
            }
            return null;
        }),
        stringToNumber: ((stringValue) => {
            if (stringValue.match(/^(\+|-)?(0?\.)?\d+$/)) {
                return parseFloat(stringValue);
            }
            return null;
        }),
    });

    /** @type {import('.').Argv.Self} */
    const self = ({
        ...EventEmitter({}),
        _Argv: (() => {
            return _self;
        }),
        booleanValues: ((name) => {
            const booleanValues = [];
            for (const stringValue of self.stringValues(name)) {
                const booleanValue = _self.stringToBoolean(stringValue);
                if (booleanValue !== null) {
                    booleanValues.push(booleanValue);
                } else {
                    booleanValues.push(null);
                }
            }
            return booleanValues;
        }),
        numberValues: ((name) => {
            const numberValues = [];
            for (const stringValue of self.stringValues(name)) {
                const numberValue = _self.stringToNumber(stringValue);
                if (numberValue !== null) {
                    numberValues.push(numberValue);
                } else {
                    numberValues.push(null);
                }
            }
            return numberValues;
        }),
        stringValues: ((name) => {
            const argv = _options.argv();
            const stringValues = [];
            for (let i = 0; i < argv.length - 1; i += 1) {
                if (argv[i] == name) {
                    stringValues.push(argv[i + 1]);
                }
            }
            return stringValues;
        }),
        booleanValue: ((name, index = 0) => {
            const booleanValues = self.booleanValues(name);
            if (index < 0 || index >= booleanValues.length) {
                return null;
            }
            return booleanValues[index];
        }),
        numberValue: ((name, index = 0) => {
            const numberValues = self.numberValues(name);
            if (index < 0 || index >= numberValues.length) {
                return null;
            }
            return numberValues[index];
        }),
        stringValue: ((name, index = 0) => {
            const stringValues = self.stringValues(name);
            if (index < 0 || index >= stringValues.length) {
                return null;
            }
            return stringValues[index];
        }),
        booleanValueOr: ((name, defaultValue = false) => {
            const booleanValue = self.booleanValue(name);
            if (booleanValue === null) {
                return defaultValue;
            }
            return booleanValue;
        }),
        numberValueOr: ((name, defaultValue = 0) => {
            const numberValue = self.numberValue(name);
            if (numberValue === null) {
                return defaultValue;
            }
            return numberValue;
        }),
        stringValueOr: ((name, defaultValue = '') => {
            const stringValue = self.stringValue(name);
            if (stringValue === null) {
                return defaultValue;
            }
            return stringValue;
        }),
        includes: ((name) => {
            return _options.argv().includes(name);
        }),
    });

    return self;

});

/** @type {import('.').Argv.Companion} */
const companion = ({});

/** @type {import('.').Argv.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Argv };
