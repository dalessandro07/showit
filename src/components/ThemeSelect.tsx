import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export default function ThemeSelect() {
  useEffect(() => themeChange(false), [])

  return (
    <section className="flex flex-col w-full">
      <label className="footer-title w-1/2">Tema</label>
      <select
        className="w-1/2 select select-bordered select-sm"
        data-choose-theme
        data-key="showitTheme">
        <option value="">Sistema</option>
        <option value="custom-dark">Oscuro</option>
        <option value="custom-light">Claro</option>
      </select>
    </section>
  )
}
