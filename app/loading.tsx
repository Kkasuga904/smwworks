// ローディング画面（スケルトンスクリーン）
export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="h-16 bg-gray-200"></div>
      <div className="space-y-4 p-8">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  )
}