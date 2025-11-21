export default function NoPermission() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold text-red-600">403 - Không có quyền</h1>
            <p className="mt-3 text-lg text-gray-700">
                Bạn không có quyền truy cập vào trang này.
            </p>
        </div>
    );
}
