# Modern Analog Clock

A sleek, responsive, and high-performance analog clock built using JavaScript, HTML5, and CSS3. This project showcases the perfect blend of mathematical logic and modern UI design.

## Features

*   **Real-time Tracking:** Accurate time synchronization using the JavaScript `Date` object.
*   **Smooth Animations:** CSS transitions ensure that the clock hands move without flickering.
*   **Neumorphic Design:** A clean, modern aesthetic with subtle shadows and a professional "Dark Mode" feel.
*   **Fully Responsive:** Works perfectly on desktops, tablets, and mobile devices.
*   **Zero Dependencies:** Built entirely with native web technologies—no external libraries like jQuery or React needed.

## Tech Stack

*   **HTML5:** Structured for semantic clarity and accessibility.
*   **CSS3 (Custom Properties):** Used for advanced styling, positioning, and smooth transitions.
*   **JavaScript:** Handles the mathematical logic to calculate the rotation angles ($360^\circ$ circle logic).

```javascript
// Example logic used in the project
const hr = 30 * hours + minutes / 2;
const min = 6 * minutes;
const sec = 6 * seconds;
