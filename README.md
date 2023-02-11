# argv

~~~~~ sh
npm install e53e04ac/argv
~~~~~

~~~~~ mjs
import { Argv } from 'e53e04ac/argv';
~~~~~

~~~~~ mermaid
graph LR;
  A(["argv"]);
  B0(["e53e04ac/event-emitter"]);
  B1(["e53e04ac/hold"]);
  C0(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/event-emitter";
  click B1 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/argv";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
