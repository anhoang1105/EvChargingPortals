from rest_framework import viewsets
from .models import TramSac, TruSac, NguoiDung
from .chuyen_doi import BoChuyenDoiTramSac, BoChuyenDoiTruSac, BoChuyenDoiNguoiDung

# API cho Trạm Sạc
class QuanLyTramSacAPI(viewsets.ModelViewSet):
    queryset = TramSac.objects.all()
    serializer_class = BoChuyenDoiTramSac

# API cho Trụ Sạc
class QuanLyTruSacAPI(viewsets.ModelViewSet):
    queryset = TruSac.objects.all()
    serializer_class = BoChuyenDoiTruSac

# THÊM MỚI: API cho Người Dùng
class QuanLyNguoiDungAPI(viewsets.ModelViewSet):
    queryset = NguoiDung.objects.all()
    serializer_class = BoChuyenDoiNguoiDung