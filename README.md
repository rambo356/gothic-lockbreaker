# Gothic Lockbreaker — Desktop App v109 / 1.0.6

Electron-проект для сборки Windows-приложения.

Изменение v109:
- окно приложения теперь открывается на всю доступную высоту монитора;
- ширина остаётся нормальной — до 1280 px, по центру экрана;
- кнопка `Рассчитать решение` должна быть заметнее без лишнего скролла.

Что внутри:
- `index.html` — приложение;
- `main.js` — Electron-обёртка;
- `package.json` — настройки сборки;
- `hero-image.png` — картинка верхнего блока;
- `favicon.png` / `favicon.ico` — иконка;
- `.bat` файлы для установки, запуска и сборки.

## Как собрать

1. Установи Node.js LTS: https://nodejs.org/

2. Распакуй архив в папку без кириллицы, например:

```text
C:\Projects\gothic-lockbreaker-desktop-app-v109-screen-height
```

3. Установи зависимости:

```text
01-install-dependencies.bat
```

4. Проверь приложение:

```text
02-run-app.bat
```

5. Собери установщик:

```text
03-build-installer.bat
```

6. Собери portable:

```text
04-build-portable.bat
```

7. Собери обе версии сразу:

```text
05-build-installer-and-portable.bat
```

Готовые файлы будут в папке `dist`:
- `Gothic-Lockbreaker-Setup-1.0.6.exe`
- `Gothic-Lockbreaker-Portable-1.0.6.exe`
