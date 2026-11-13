# miniAI

Trợ lý AI giao diện tiếng Việt, responsive cho web và Android.

## Chạy website trên máy có Node.js
1. Cài Node.js 20 trở lên.
2. Giải nén dự án, mở terminal tại thư mục `miniAI`.
3. Chạy `npm install`.
4. Sao chép `.env.example` thành `.env`, điền API key của nhà cung cấp tương thích OpenAI.
5. Chạy `npm start`.
6. Mở `http://localhost:3000`.

## Chạy trực tiếp giao diện
Có thể mở `www/index.html`, sau đó vào Cài đặt và nhập API URL, API key, model. Một số nhà cung cấp chặn CORS; khi đó hãy chạy backend Node.js và nhập địa chỉ backend.

## Android APK qua GitHub Actions
1. Tạo repository GitHub mới và tải toàn bộ nội dung thư mục này lên.
2. Vào tab Actions, chọn workflow **Build miniAI Android APK**.
3. Bấm **Run workflow** (hoặc push lên nhánh main).
4. Khi hoàn tất, mở lần chạy workflow và tải artifact `miniAI-debug-apk`.
5. Giải nén artifact và cài `app-debug.apk` trên Android.

## Cấu hình AI an toàn
Khuyến nghị đặt `AI_API_KEY` trong biến môi trường của backend, không nhúng khóa bí mật vào website công khai hoặc APK. Nếu dùng backend riêng, nhập URL backend (ví dụ `https://your-domain.example`) trong Cài đặt. Backend hiện cung cấp `/api/chat` và `/health`.

## Hiện trạng
Đã có giao diện chat, lịch sử cục bộ, cài đặt endpoint/model, kết nối API chat completions và cấu hình build Android. Chưa tích hợp tìm kiếm web thực, upload ảnh đa phương thức, đăng nhập/tài khoản cloud hoặc đồng bộ đa thiết bị; đây là các phần mở rộng tiếp theo.
