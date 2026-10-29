from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .xu_ly_api import QuanLyTramSacAPI, QuanLyTruSacAPI, QuanLyNguoiDungAPI

# Khởi tạo Router chính của hệ thống
router = DefaultRouter()

# ==========================================
# NHÓM 1: QUẢN LÝ NGƯỜI DÙNG & TÀI KHOẢN
# ==========================================
router.register(r'nguoidung', QuanLyNguoiDungAPI, basename='nguoidung')


# ==========================================
# NHÓM 2: QUẢN LÝ CƠ SỞ HẠ TẦNG SẠC
# ==========================================
router.register(r'tramsac', QuanLyTramSacAPI, basename='tramsac')
router.register(r'trusac', QuanLyTruSacAPI, basename='trusac')


# ==========================================
# DANH SÁCH TỔNG HỢP URL PATTERNS
# ==========================================
urlpatterns = [
    # Include toàn bộ các route đã đăng ký trong router
    path('', include(router.urls)),
]