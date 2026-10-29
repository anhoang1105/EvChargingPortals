from rest_framework import serializers
from .models import NguoiDung, TramSac, TruSac

class BoChuyenDoiNguoiDung(serializers.ModelSerializer):
    class Meta:
        model = NguoiDung
        fields = ['id', 'email', 'ho_ten', 'vai_tro']

class BoChuyenDoiTruSac(serializers.ModelSerializer):
    class Meta:
        model = TruSac
        fields = '__all__'

class BoChuyenDoiTramSac(serializers.ModelSerializer):
    # Lấy luôn danh sách các trụ sạc thuộc trạm này
    danh_sach_tru = BoChuyenDoiTruSac(many=True, read_only=True)
    
    class Meta:
        model = TramSac
        fields = ['id', 'ten_tram', 'vi_do', 'kinh_do', 'dia_chi', 'hinh_anh', 'trang_thai', 'danh_sach_tru']