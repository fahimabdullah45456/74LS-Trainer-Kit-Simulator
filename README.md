# 74LS76 Trainer Kit Simulator

An interactive browser-based simulator for learning and
practising circuits using the 74LS76 JK flip-flop IC.

## Features

- Interactive IC pin diagrams for 74LS76, 74LS164, DM74LS181N, and 74LS165
- Two JK flip-flops, serial/parallel shift registers, and a 4-bit ALU
- Automatic clock with selectable frequency
- Manual clock pulse
- Interactive circuit wiring
- LED output indicators
- Logic simulation and testing
- Five IC sockets with independent IC state
- A minimizable, hideable, and restorable in-app guide

## Supported ICs

| Model | Function | DIP power pins | Important behavior |
| --- | --- | --- | --- |
| 74LS76 | Dual JK flip-flop | VCC 5, GND 13 | Falling-edge clock; active-LOW PRE/CLR |
| 74LS164 | 8-bit serial-in/parallel-out register | VCC 14, GND 7 | Rising-edge CP; A and B are AND-gated; asynchronous active-LOW CLR |
| DM74LS181N | 4-bit ALU/function generator | VCC 24, GND 12 | Active-LOW A̅/B̅/F̅ and P̅/G̅ data signals; pins 7 Cn and 16 Cn+4 are active-HIGH carry signals |
| 74LS165 | 8-bit parallel-in/serial-out register | VCC 16, GND 8 | Active-LOW SH/LD; rising-edge gated clock; QH and QH̅ outputs |

To change an IC in a socket, select the **▣** tool, choose a model, then click a socket. Clicking an occupied socket removes the IC and its attached pin wires. The simulator retains its existing wiring, logic-resolution, clock, undo/redo, switches, LEDs, and display behavior.

## Technologies

- HTML
- CSS
- JavaScript

## How to Run

1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. Start experimenting with the simulator.

## Automated Tests

The project includes `run_tests.js` for running automated
tests of the simulator logic. Run it with Node.js (no packages required):

```sh
node run_tests.js
```

The same engine tests are available in the browser at `index.html#selftest`.

## Datasheets

Pin maps and new IC behavior were checked against manufacturer datasheets:

- [TI SN74LS164 datasheet](https://www.ti.com/lit/ds/symlink/sn74ls164.pdf)
- [TI SN74LS165A datasheet](https://www.ti.com/lit/ds/symlink/sn74ls165a.pdf)
- [TI SN54LS181 / SN74LS181 datasheet](https://www.ti.com/lit/ds/symlink/sn54ls181.pdf) (family function table and 24-pin package)

## Author

Created as an educational project for digital electronics
and logic circuit practice.
