$(document).ready(function () {
    $('.deleteForm').click(function (evt) {
        var name = $(this).data("name");
        var form = $(this).closest("form");
        evt.preventDefault();
        swal({
            title: `ต้องการลบข้อมูล ${name} หรือไม่ ?`,
            text: "ถ้าลบแล้วไม่สามารถกู้คืนได้",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willdelete) => {
            if (willdelete) {
                form.submit();
            }
        });
    });
});
