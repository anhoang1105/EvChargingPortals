import uuid
from django.db import models

class NguoiDung(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.CharField(max_length=255, unique=True)
    mat_khau_hash = models.CharField(max_length=255)
    ho_ten = models.CharField(max_length=100)
    vai_tro = models.CharField(max_length=20, help_text="QuanTri, KhachHang, NhanVien") #Admin, Customer, Staff

    def __str__(self):
        return self.ho_ten

class TramSac(models.Model):
    id = models.AutoField(primary_key=True)
    ten_tram = models.CharField(max_length=255)
    vi_do = models.FloatField(help_text="Vĩ độ") 
    kinh_do = models.FloatField(help_text="Kinh độ")
    dia_chi = models.TextField()
    hinh_anh = models.TextField(blank=True, null=True)
    trang_thai = models.CharField(max_length=20, default='Hoạt động')

    def __str__(self):
        return self.ten_tram

class TruSac(models.Model):
    id = models.AutoField(primary_key=True)
    tram = models.ForeignKey(TramSac, on_delete=models.CASCADE, related_name='danh_sach_tru')
    mac_iot = models.CharField(max_length=50)
    loai_cong = models.CharField(max_length=20)
    kw_cs = models.DecimalField(max_digits=5, decimal_places=2)
    trang_thai = models.CharField(max_length=20, default='Trống')

    def __str__(self):
        return f"{self.tram.ten_tram} - Trụ {self.id}"

class PhuongTien(models.Model):
    id = models.AutoField(primary_key=True)
    nguoi_dung = models.ForeignKey(NguoiDung, on_delete=models.CASCADE)
    bien_so = models.CharField(max_length=20)
    hang_xe = models.CharField(max_length=50)
    pin_kwh = models.DecimalField(max_digits=5, decimal_places=2)
    loai_cong = models.CharField(max_length=20)

class BangGia(models.Model):
    id = models.AutoField(primary_key=True)
    gio_bat_dau = models.TimeField()
    gio_ket_thuc = models.TimeField()
    don_gia = models.DecimalField(max_digits=10, decimal_places=2)

class DatCho(models.Model):
    id = models.AutoField(primary_key=True)
    nguoi_dung = models.ForeignKey(NguoiDung, on_delete=models.CASCADE)
    tru = models.ForeignKey(TruSac, on_delete=models.CASCADE)
    tg_dat = models.DateTimeField()
    het_han = models.DateTimeField()
    trang_thai = models.CharField(max_length=20)

class HoaDon(models.Model):
    id = models.AutoField(primary_key=True)
    nguoi_dung = models.ForeignKey(NguoiDung, on_delete=models.CASCADE)
    tru = models.ForeignKey(TruSac, on_delete=models.CASCADE)
    bat_dau = models.DateTimeField()
    ket_thuc = models.DateTimeField()
    tong_kwh = models.DecimalField(max_digits=8, decimal_places=2)
    tong_tien = models.DecimalField(max_digits=12, decimal_places=2)
    phuong_thuc = models.CharField(max_length=20)
    trang_thai = models.CharField(max_length=20)

class LichSuIoT(models.Model):
    id = models.BigAutoField(primary_key=True)
    tru = models.ForeignKey(TruSac, on_delete=models.CASCADE)
    nhiet_do = models.DecimalField(max_digits=5, decimal_places=2)
    dien_ap = models.DecimalField(max_digits=5, decimal_places=2)
    dong_dien = models.DecimalField(max_digits=5, decimal_places=2)
    tg_ghi = models.DateTimeField(auto_now_add=True)