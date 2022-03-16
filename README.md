## SvelteDex
A Pokemon encyclopedia modeled after the in-game Pokedex tool; created with Svelte as frontend framework and hosted
with Firebase.
https://sveltedex.web.app


## Running the app locally

Clone the repository and install the dependencies...

```bash
cd sveltedex-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000).

## Logs
#### March 16, 2022
Replaced header logo with uncropped image, minor adjustments to mobile layout.<br/>
BUGS:
- Some discrepancies (specifically regarding naming + alternate forms) between image database and info database prevent some pokemon's data from displaying
TODO:
- Full Pokemon list, modal/dropdown?
- Ability toggle for multiple/hidden abilities
- Loading screen while fetching data
- Description by generation/region/dex
- More advanced search functions/filters
- Some animations, particularly on landing page?
- Move list?
