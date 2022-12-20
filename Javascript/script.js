                var start;

                function getRandomColor() {

                    var letters = '0123456789ABCDEF';

                    var color = '#';

                    for (var i = 0; i < 6; i++) {

                        color += letters[Math.floor(Math.random() * 16)];

                    }

                    return color;

                }

                function ShapeAppear() {

                    var top = Math.floor(Math.random() * 5) * 100;

                    var left = Math.floor(Math.random() * 11) * 100;

                    var width = (Math.floor(Math.random() * 3) + 1) * 100;

                    if (Math.random() > 0.5) {

                        document.getElementById("shape").style.borderRadius = "50%";

                    } else {

                        document.getElementById("shape").style.borderRadius = "0%";

                    }

                    document.getElementById("shape").style.backgroundColor = getRandomColor();

                    document.getElementById("shape").style.width = width + "px";

                    document.getElementById("shape").style.height = width + "px";

                    document.getElementById("shape").style.top = top + "px";

                    document.getElementById("shape").style.left = left + "px";

                    document.getElementById("shape").style.display = "block";

                    start = new Date().getTime();

                }            

                function ShapeAppearAfter() {

                    setTimeout(ShapeAppear, Math.floor(Math.random() * 3) * 1000);

                }

                ShapeAppearAfter();

                document.getElementById("shape").onclick = function() {

                    document.getElementById("shape").style.display = "none";

                    var end = new Date().getTime();

                    var time = (end - start) / 1000;

                    document.getElementById("time").innerHTML = time + "s";

                    ShapeAppearAfter();

                 }