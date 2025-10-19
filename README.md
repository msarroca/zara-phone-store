# 🛍️ Zara Phone Store — Frontend Challenge (Inditex Group)

Project developed as a **technical test for the Frontend Developer position** at **Inditex Group**.  
This web application simulates an online mobile phone store, featuring **product listing, product detail, search, persistent shopping cart, and hybrid SSR/CSR rendering** using **Next.js 15**.

🌐 [Live demo on Vercel](https://zara-phone-store.vercel.app/)

---

## 🚀 Tech Stack

| Tool                                     | Purpose                                              |
| ---------------------------------------- | ---------------------------------------------------- |
| **Next.js 15 (App Router)**              | React framework with SSR, ISR, and Server Components |
| **React 18**                             | UI Library                                           |
| **JavaScript**                           | Main language                                        |
| **CSS Modules**                          | Scoped component styles                              |
| **Vitest + React Testing Library + MSW** | Integration testing and API mocks                    |
| **ESLint + Prettier + Stylelint**        | Code linting and formatting                          |
| **LocalStorage API**                     | Client-side cart persistence                         |
| **Native Fetch API**                     | API communication (no axios)                         |
| **Turbopack**                            | Fast development bundler                             |

---

## 🧩 Features

- 🔍 **Product listing** with integrated search (`/products`)
- 📱 **Product detail** page (`/product/[id]`)
- 🛒 **Persistent shopping cart** handled via **React Context + LocalStorage**
- 💰 **Automatic total price and item count calculation**
- 🧠 **Error and loading states** handled via `app/error.js` and `app/loading.js`
- ⚡ **Hybrid SSR / SSG rendering** with native `fetch` and `cache: 'no-store'`
- 🧪 **Integration testing** using Vitest and MSW
- 🧱 **Modular, scalable architecture** separating `components/`, `context/`, and `services/`

---

## ⚙️ Installation & Usage

### 1️⃣ Clone the project

```bash
git clone https://github.com/msarroca/zara-phone-store.git
cd zara-phone-store
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Development mode

```bash
npm run dev
```

- Serves **unminified assets** with Hot Module Reloading.
- Available at [http://localhost:3000](http://localhost:3000)

### 4️⃣ Production mode

```bash
npm run build
npm run start
```

- Compiles **concatenated and minified** assets.
- Runs optimized production server.

---

## 🧪 Testing

Run integration tests:

```bash
npm run test
```

Testing setup includes:

- [`Vitest`](https://vitest.dev/) as the test runner.
- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) for component rendering.
- [`msw`](https://mswjs.io/) for mocking REST API responses.

---

## 🌐 Public API

All requests use the provided public API endpoint:

```
https://prueba-tecnica-api-tienda-moviles.onrender.com
```

Endpoints used:

- `GET /products`
- `GET /products/:id`

API calls are implemented with the **native Fetch API**, handling errors through `res.ok` checks and throwing custom `Error` objects, automatically caught by the `app/error.js` boundary.

---

## 🧠 Data Architecture

| Layer                     | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| **Services**              | Handles HTTP requests (fetch). Throws controlled errors. |
| **Context (CartContext)** | Global cart state & persistence using LocalStorage.      |
| **Components**            | Presentational layer only (no business logic).           |
| **App Router**            | Defines routes, layouts, and error/loading boundaries.   |

---

## 💾 Cart Persistence

The shopping cart is stored in:

```bash
localStorage.setItem('cart', JSON.stringify(cart))
```

---

## ⚡ Performance Optimizations

- `useMemo` and `useCallback` to prevent unnecessary re-renders.
- Non-blocking SSR via async `fetch` calls.

---

## 🧰 Available Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Starts development mode (Turbopack) |
| `npm run build` | Builds and optimizes for production |
| `npm run start` | Runs production server              |
| `npm run lint`  | Runs ESLint checks                  |
| `npm run test`  | Executes tests with Vitest          |

---

## 🧾 Requirements Met

✅ Separate **Development** and **Production** modes  
✅ **Hybrid SSR + CSR** rendering (Next.js App Router)  
✅ **Persistent cart management** via LocalStorage  
✅ **Error** (`app/error.js`) and **loading** (`app/loading.js`) states  
✅ **Clean, modular, and maintainable** architecture  
✅ **Integration testing** with Vitest + MSW  
✅ **Native Fetch API** (no axios)  
✅ **Minified assets** in production

---

## 👨‍💻 Author

**Marc Sarroca Díaz**  
Frontend & Mobile Developer  
📧 [m.sarroca@gmail.com](mailto:m.sarroca@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/msarroca-diaz)

---
