# U.S. Travelers Banner + Virtual Tour

## What changes (homepage only, above the hero video)
Add one new section directly above the hero video. Nothing else on the site changes.

Content:
- Label (small italic purple, like other section primers): VISITING CROATIA?
- Headline (brand display font, navy): Plan your trip to Croatia with a visit to HaHaHouse.
- Description: Discover the Museum of Laughter in the heart of Zagreb, featuring over 40 interactive exhibits.
- Special offer line (highlighted with a small purple-framed sticker/pill): Exclusive for U.S. travelers: Enjoy a complimentary guided tour with your museum admission.
- Two buttons:
  - BOOK YOUR VISIT (yellow pill, same style as hero ticket button) opens https://www.entrio.hr/brand/hahahouse in a new tab.
  - BOOK A VIRTUAL TOUR (purple-outlined pill) goes to the existing contact form on the Private Events page.

## Look and mobile
- White background, centered text, same fonts, colors and spacing as the other homepage sections.
- On phones the buttons stack full-width; text sizes scale down.

## Technical details
- Edit only `src/pages/Index.tsx`: insert a `<section>` before the hero `<section>`.
- Virtual tour link: `/private-events#contact` (form already has `id="contact"`).
- External link uses `target="_blank" rel="noopener noreferrer"`.
