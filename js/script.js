document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnAddToCart').addEventListener('click', function() {

        var confirmationModal = bootstrap.Modal.getInstance(document.getElementById('addtocart'));
        confirmationModal.hide();

        Swal.fire({
            icon: 'success',
            title: 'Added to Cart',
            text: 'Your item has been successfully added to the cart!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
    });
});
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
            timer: 3000, 
            timerProgressBar: true,
            })
        //     .then(() => {
        //     window.location.href = '/index.html';
        // });
    });
});



