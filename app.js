(() => {
    const db = new Dexie('ShoppingApp');
    db.version(1).stores({
        items: '++id, name,price,isPurchased'
    });

    let emptyShopppingItem = document.getElementById('emptyShopppingItem');
    let showUpdateBtn = document.querySelector('.updateBtn');
    let clearItemBtn = document.querySelector('.clearAll');

    // Emptying The Items content
    document.querySelector("#clearBtn").addEventListener("click", async (e) => {
        e.preventDefault();
        const itemForm = document.getElementById('itemForm');

        await db.items.orderBy('id').delete();
        await populateItemsDiv();

        emptyShopppingItem.style.display = "block";
        clearItemBtn.style.display = "none";

        itemForm.reset();
    });

    // Adding Items
    document.querySelector("#addItemButton").addEventListener("click", async (e) => {
        e.preventDefault();
        const itemForm = document.getElementById('itemForm');

        const name = document.getElementById('nameInput').value;
        const quantity = document.getElementById('quantityInput').value;
        const price = document.getElementById('priceInput').value;

        await db.items.add({
            name,
            quantity,
            price
        });
        await populateItemsDiv()

        itemForm.reset();

        emptyShopppingItem.style.display = "none";
        clearItemBtn.style.display = "inline";
    });

    // updating Item Contents
    document.querySelector('#updateButton').addEventListener('click', async (e) => {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const itemForm = document.getElementById('itemForm');

        return await db.items.update(id, {
            name: document.querySelector('#nameInput').value,
            quantity: document.querySelector('#quantityInput').value,
            price: document.querySelector('#priceInput').value

        }).then(async updated => {
            if (updated) {
                await populateItemsDiv();
                itemForm.reset();
                showUpdateBtn.style.display = "none";

            } else {

            }
        }).catch(error => {

        });

    })

    // Removing each Items
    removeEachItem = async (id) => {
        await db.items.delete(id);
        await populateItemsDiv();
    }

    // Toggling Purchase Items
    toggleItems = async (event, id) => {
        await db.items.update(id, {
            isPurchased: !!event.target.checked
        });
        await populateItemsDiv();

    }

    // Form contents
    populateItemsDiv = async () => {
        const allItems = await db.items.reverse().toArray();

        itemsDiv.innerHTML = allItems.map(item => `
            <div class="item ${item.isPurchased && 'purchased'} ">
                <label>
                    <input type="checkbox" class="checkbox" onchange="toggleItems(event, ${item.id})" ${item.isPurchased && 'checked'}>
                </label>

                <div class="itemInfo">
                    <p>${item.name}</p>
                    <p>$${item.price} X ${item.quantity}</p>
                </div>

                <div class="editBtn" id="editButton">
                    <img src="assets/edit icon.png" onclick="editClickedItem(${item.id})" class="editPencil" data-edit="edited">
                </div>

                <button class="deleteButton" onclick=" removeEachItem(${item.id})">X</button>
            </div>`).join('');

        const arrayOfPrices = allItems.map(item => item.price * item.quantity);
        const totalPrice = arrayOfPrices.reduce((a, b) => a + b, 0);

        totalPriceDiv.innerText = 'Total price: $' + totalPrice;
    }

    // Preloader
    fadeOut = () => {
        document.querySelector('.loaderWrapper').style.display = "none";
        emptyShopppingItem.style.display = "block";
    }

    pageLoad = () => {
        setTimeout(() => {
            fadeOut();
            populateItemsDiv();
        }, 4000);
    }

    // editing item
    editClickedItem = (id) => {

        db.open().then(async db => {
            return await db.items.where('id').equals(id).toArray();
        }).then(item => {

            document.querySelector('#nameInput').value = item[0].name;
            document.querySelector('#quantityInput').value = parseInt(item[0].quantity);
            document.querySelector('#priceInput').value = parseInt(item[0].price);

            showUpdateBtn.style.display = "inline";
            showUpdateBtn.dataset.id = item[0].id;
        });
    }

    pageLoad();

})();