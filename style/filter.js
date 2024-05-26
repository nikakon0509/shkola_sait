
            document.addEventListener("DOMContentLoaded", function(){
            const buttons = document.querySelectorAll(".filter-button");
            const items = document.querySelectorAll(".item");

            buttons.forEach(button => {
                button.addEventListener("click", function(){
                const filter = button.getAttribute("data-filter");

                items.forEach(item => {
                    if (filter === "all" || item.classList.contains(filter)) {
                    item.classList.add("active");
                    } else {
                    item.classList.remove("active");
                    }
                });
                });
            });
            });
