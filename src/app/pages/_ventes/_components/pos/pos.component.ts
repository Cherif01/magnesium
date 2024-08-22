import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}

  // Tableau des produits
  products = [
    {
      name: 'Riz au gras',
      price: 55000,
      image:
        'https://i0.wp.com/www.achkid.net/wp-content/uploads/2023/09/AdobeStock_614240849_Preview-removebg-preview.png?fit=576%2C433&ssl=1',
      category: 'Plat principal',
      isPromo: false
    },
    {
      name: 'Jus PEPSI',
      price: 15000,
      image:
        'https://www.pepsico.com/images/default-source/products-brands/pepsi_12oz.png?sfvrsn=46c9ae09_3',
      category: 'Boisson',
      isPromo: true
    },
    {
      name: 'Pizza Calzone',
      price: 60000,
      image:
        'https://chez-mimi-pontcharra.fr/wp-content/uploads/2022/07/248_161.png',
      category: 'Plat principal',
      isPromo: false
    },
    {
      name: 'Vimto',
      price: 10000,
      image: 'https://www.kroger.com/product/images/large/front/0007426500599',
      category: 'Boisson',
      isPromo: false
    },
    {
      name: 'Poisson Braisé',
      price: 80000,
      image:
        'https://i.pinimg.com/originals/f6/33/9e/f6339e7538fb29db50b6d1cae5fd3773.png',
      category: 'Poisson',
      isPromo: true
    },
    {
      name: 'Attiéké',
      price: 35000,
      image:
        'https://i.ytimg.com/vi/5KjWpS2xnDc/maxresdefault.jpg',
      category: 'Accompagnement',
      isPromo: false
    },
    {
      name: 'Hamburger',
      price: 65000,
      image:
        'https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smashburger_classic_single_167e7ca495.png',
      category: 'Plat principal',
      isPromo: false
    },
    {
      name: 'Foutou Banane',
      price: 50000,
      image:
        'https://www.residenceohinene.net/ca/wp-content/uploads/2017/08/FOUTOU-BANANE.png',
      category: 'Accompagnement',
      isPromo: false
    },
    {
      name: 'Virgin Winter White',
      price: 45000,
      image:
        'https://www.lillet.com/wp-content/uploads/Cocktail-drink-Virgin-White-Peach-Lillet.png',
      category: 'Boisson',
      isPromo: true
    },
    {
      name: 'Fanta Boite',
      price: 12000,
      image:
        'https://m.media-amazon.com/images/I/61EMsb5lGLL.jpg',
      category: 'Accompagnement',
      isPromo: false
    },
    {
      name: 'Crevettes roses ',
      price: 90000,
      image:
        'https://www.academiedugout.fr/images/5435/1200-auto/fotolia_50087349_subscription_xl-copy.jpg?poix=50&poiy=50',
      category: 'Soupe',
      isPromo: true
    }
  ]
}
