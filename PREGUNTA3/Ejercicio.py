def group_products(data):
    products = {}
    for product in data:
        name = product["name"]
        ean = product["ean"]
        market = product["market"]
        price = product["price"]
        if ean not in products:
            products[ean] = {
                "name": name,
                "data": [],
                "markets": [],
                "prices": []
            }
        products[ean]["data"].append(product)
        products[ean]["markets"].append(market)
        products[ean]["prices"].append(price)

    for ean, product in products.items():
        product["markets"] = f"({len(product['markets'])}) - {', '.join(product['markets'])}"
        if len(product["prices"]) == 1:
           product["prices"] = product["prices"][0]
        else:
           product["prices"] = f"{min(product['prices'])} - {max(product['prices'])}"

    return products

data = [
    {
        "name": "Zapatillas Adidas",
        "sku": "193456",
        "ean": "EAN1234567890123",
        "market": "mercado libre",
        "price": 35900
    },
    {
        "name": "Zapatilla Adidas",
        "sku": "113456",
        "ean": "EAN1234567890123",
        "market": "falabella",
        "price": 33900
    },
    {
        "name": "Iphone Pro Max 14",
        "sku": "12345310",
        "ean": "EAN123456790123",
        "market": "amazon",
        "price": 15000
    },
    {
        "name": "Samsung Galaxy S21",
        "sku": "1234567",
        "ean": "EAN1234567123",
        "market": "falabella",
        "price": 30000
    },
    {
        "name": "Pantalón Levis",
        "sku": "Z123456Q",
        "ean": "EAN1456789012",
        "market": "ripley",
        "price": 30000
    },
    {
        "name": "Pulsera Oro",
        "sku": "X12346E",
        "ean": "EAN126789023",
        "market": "linio",
        "price": 29990
    },
    {
        "name": "Cadena Plata",
        "sku": "S1234K56",
        "ean": "EAN4567890123",
        "market": "paris",
        "price": 45000
    },
    {
        "name": "Audifonos Gamer",
        "sku": "Q123456V",
        "ean": "EAN123456782",
        "market": "dexter",
        "price": 21000
    },
    {
        "name": "Audifonos Gamer",
        "sku": "Q12G4G6V",
        "ean": "EAN123456782",
        "market": "paris",
        "price": 31000
    },
    {
        "name": "Audifonos Gamer",
        "sku": "QC2GGR1A",
        "ean": "EAN123456782",
        "market": "hites",
        "price": 20000
    },
    {
        "name": "Skateboard Gangsta",
        "sku": "R12345C6",
        "ean": "EAN1234567890",
        "market": "dportenis",
        "price": 19900
    },
    {
        "name": "Skateboard Gangsta",
        "sku": "R12375CX",
        "ean": "EAN1234567890",
        "market": "mercado libre",
        "price": 21900
    },
    {
        "name": "Blusa Vintage",
        "sku": "M123A456",
        "ean": "EAN1234567813",
        "market": "zara",
        "price": 8000
    },
]




print(group_products(data))