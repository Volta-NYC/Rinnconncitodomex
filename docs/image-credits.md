# Image credits

**These are placeholders.** The original Rinconcito DomEx site shipped no usable
photography, so every photo below is CC0 stock standing in until the client
supplies real photos of their own food, kitchen, and events. Swap the files in
place — the filenames and aspect ratios are what the components expect.

All images are CC0 (public domain dedication): no attribution is legally
required, and they are cleared for commercial use. Sourced via the
[Openverse](https://openverse.org) API, limited to its StockSnap.io and Rawpixel
collections.

| File | Used on | Source | License |
| --- | --- | --- | --- |
| `public/images/hero-service.jpg` | Home hero | Rawpixel | CC0 |
| `public/images/kitchen-craft.jpg` | Home — craft band (main) | StockSnap.io | CC0 |
| `public/images/prep-peppers.jpg` | Home — craft band (accent) | StockSnap.io | CC0 |
| `public/images/catering-spread.jpg` | Catering hero | Rawpixel | CC0 |
| `public/images/story-chef.jpg` | Our Story hero | StockSnap.io | CC0 |
| `public/og.jpg` | Open Graph / Twitter card | Rawpixel | CC0 |

Source resolution caps out at 960–1024px on the wide edge (the free tiers of both
providers). That is enough for the split-duotone frames at their rendered sizes,
but real client photography should come in at 2000px or wider.

Images are stored as progressive JPEG and optimized at request time by
`next/image` (AVIF/WebP, responsive `sizes`), so no build-time asset pipeline is
needed.
