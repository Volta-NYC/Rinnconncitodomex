import { AlertCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { menu, menuCopy, menuIsPlaceholder } from "@/lib/menu"
import type { Locale } from "@/lib/site"

export function MenuSection({ locale }: { locale: Locale }) {
  const t = menuCopy[locale]
  const categories = menu[locale]

  return (
    <section className="menu-band">
      <div className="section shell">
        <Reveal className="menu-intro">
          <div className="eyebrow"><span />{t.kicker}</div>
          <h2>{t.title}</h2>
          <p>{t.body}</p>
          {menuIsPlaceholder && (
            <p className="menu-notice">
              <AlertCircle aria-hidden="true" />
              {t.placeholderNotice}
            </p>
          )}
        </Reveal>

        <div className="menu-categories">
          {categories.map((category, categoryIndex) => (
            <Reveal className="menu-category" key={category.name} delay={categoryIndex * 0.06}>
              <div className="menu-category-head">
                <h3>{category.name}</h3>
                {category.description && <p>{category.description}</p>}
              </div>
              <ul>
                {category.items.map((item) => (
                  <li key={`${category.name}-${item.name}`}>
                    <div className="menu-item-line">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-leader" aria-hidden="true" />
                      <span className="menu-item-price">${item.price}</span>
                    </div>
                    {item.description && <p>{item.description}</p>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
