// src/app/not-found.tsx
export default function NotFoundPage() {
  return (
    <div class="flex h-screen justify-center items-center flex-col bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Page Not Found
        </p>
      </div>
    </div>
  );
}
