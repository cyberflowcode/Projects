document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#exampleModalToggle2 form').addEventListener('submit', function(event) {
        event.preventDefault();

        var shippingAddressModal = bootstrap.Modal.getInstance(document.getElementById('exampleModalToggle2'));
        shippingAddressModal.hide();

        Swal.fire({
            icon: 'success',
            title: 'Order Placed',
            text: 'Your order has been successfully placed!',
            showConfirmButton: false, 
            timer: 2000, 
            timerProgressBar: true,  
        }).then(() => {
            window.location.href = '/index.html'; 
        });
    });
});