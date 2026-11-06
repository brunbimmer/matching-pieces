# Matching Pieces

Matching Pieces is a responsive marketplace prototype for collectors who want to complete a set, sell duplicate pieces, or publish a focused wanted listing. The current interface demonstrates the SetMatch concept with collectible tableware, nearby matches, set progress, and a listing flow.

## Features

- Track owned, missing, and duplicate pieces in a collection
- Browse matched sale and wanted listings
- Compare match confidence, price, location, and condition
- Create a sale or wanted listing through a modal form
- Use the responsive phone interface on mobile and desktop screens

## Run locally

The prototype uses plain HTML, CSS, and JavaScript with no build step or dependencies.

```sh
git clone https://github.com/brunbimmer/matching-pieces.git
cd matching-pieces
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

You can also open `index.html` directly, though a local web server more closely matches a deployed environment.

## Project structure

```text
.
├── assets/       # Original SVG illustrations
├── app.js        # Listing dialog interaction
├── index.html    # Prototype markup and content
└── styles.css    # Responsive layout and visual design
```

## Status

This repository is an interactive front-end prototype. Search, navigation, payments, authentication, persistence, and marketplace transactions are not connected to backend services.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.

## License

Matching Pieces is available under the [MIT License](LICENSE).
