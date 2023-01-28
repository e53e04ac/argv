/*!
    @e53e04ac/argv/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Argv {

    type EventSpecs = Record<never, never>;

    type Options = {
        readonly argv: ValueOrGet<string[]>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly stringToBoolean: {
            (stringValue: string): null | boolean;
        };
        readonly stringToNumber: {
            (stringValue: string): null | number;
        };
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Argv: Get<_Self>
        readonly booleanValues: {
            (name: string): (null | boolean)[];
        };
        readonly numberValues: {
            (name: string): (null | number)[];
        };
        readonly stringValues: {
            (name: string): string[];
        };
        readonly booleanValue: {
            (name: string, index?: number): null | boolean;
        };
        readonly numberValue: {
            (name: string, index?: number): null | number;
        };
        readonly stringValue: {
            (name: string, index?: number): null | string;
        };
        readonly booleanValueOr: {
            (name: string, defaultValue?: boolean): boolean;
        };
        readonly numberValueOr: {
            (name: string, defaultValue?: number): number;
        };
        readonly stringValueOr: {
            (name: string, defaultValue?: string): string;
        };
        readonly includes: {
            (name: string): boolean;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Argv = Argv.Self;

export declare const Argv: Argv.ConstructorWithCompanion;
