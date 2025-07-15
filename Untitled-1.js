const imgvar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITG_ajsQbgYYj6EECDUilhk2878TXs0ndGjPY6BKJgv-DdpWm_t0rX8pPt8LuxZn-hcY&usqp=CAU"
const imgvar2 = "https://c.tenor.com/9pZtLxVsemsAAAAd/tenor.gif"

document.getElementById("bttn").addEventListener('click', function() {
            var username = document.getElementById("myTextArea").value;
            var password = document.getElementById("myTextArea2").value;
            if ((username === 'admin') && (password === '123')) { // Compare the value as a string
                document.getElementById("Granted").style.visibility = 'visible';
                document.getElementById('Image').src = imgvar;
                document.getElementById('Image2').src = imgvar2;
                document.getElementById("NotGranted").style.visibility = 'hidden';
                document.getElementById("Image").style.visibility = 'visible'
                document.getElementById("Image2").style.visibility = 'visible'
            } else {
                document.getElementById("NotGranted").style.visibility = 'visible';
                document.getElementById("Granted").style.visibility = 'hidden';
                document.getElementById("Image").style.visibility = 'hidden'
                document.getElementById("Image2").style.visibility = 'hidden'
            }
        });
