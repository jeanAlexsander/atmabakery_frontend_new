import React from 'react';
import CakeCard from '../BakePage/CakeCard';
import rotisosis from '../../assets/RotiSosis.png'
import rotikeju from '../../assets/RotiKeju.png'
import milkbun from '../../assets/MilkBun.png'
import './BreadPageCategories.css'

const BreadPageCategories = () => {
  const products = [
    {
      "ProductId": 1,
      "ProductName": "Roti Sosis",
      "ProductImage": [
          {
              id: 1,
              image: rotisosis
          },
          {
              id: 2,
              image: rotisosis
          },
          {
              id: 3,
              image: rotisosis
          }
      ],
      "ProductCode": "P1",
      "ProductCategory": "Category 1",
      "ProductSubCategory": "Sub Category 1",
      "ProductBrand": "Brand 1",
      "ProductColor": "Color 1",
      "ProductSize": "Size 1",
      "ProductWeight": "Weight 1",
      "ProductMaterial": "Material 1",
      "ProductQuantity": 10,
      "ProductUnit": "Unit 1",
      "ProductPrice": 800,
      "SalesPrice": 675,
      "ProductDiscount": 20,
      "ProductDiscountType": "Percentage",
      "ProductTax": 20,
      "ProductTaxType": "Percentage",
      "ProductShippingCharge": 20,
      "ProductShippingChargeType": "Percentage",
      "ProductShippingTime": "1-2 days",
      "ProductShippingTimeType": "Days",
      "ProductShippingLocation": "Location 1",
      "ProductShippingLocationType": "Country",
      "ProductShippingReturnPolicy": "Return Policy 1",
      "ProductShippingReturnPolicyType": "Days",
      "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
      "ProductShippingReturnPolicyDescriptionType": "Days",
      "ProductReviews": [
          {
              "ReviewId": 1,
              "Name": "Harshal Jain",
              "Email": "",
              "Rating": 5,
              "Date": "2021-08-01",
              "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          {
              "ReviewId": 2,
              "Name": "Viraj",
              "Email": "",
              "Rating": 1,
              "Date": "2021-08-01",
              "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              "ReviewId": 3,
              "Name": "Harshal Jain",
              "Email": "",
              "Rating": 4,
              "Date": "2021-08-01",
              "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          }
      ]
  },
  {
      "ProductId": 2,
      "ProductName": "Milk Bun",
      "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "ProductImage": [
          {
              id: 1,
              image: milkbun
          },
          {
              id: 2,
              image: milkbun
          },
          {
              id: 3,
              image: milkbun
          }
      ],
      "ProductCode": "P1",
      "ProductCategory": "Category 1",
      "ProductSubCategory": "Sub Category 1",
      "ProductBrand": "Brand 1",
      "ProductColor": "Color 1",
      "ProductSize": "Size 1",
      "ProductWeight": "Weight 1",
      "ProductMaterial": "Material 1",
      "ProductQuantity": 10,
      "ProductUnit": "Unit 1",
      "ProductPrice": 100,
      "SalesPrice": 90,
      "ProductDiscount": 10,
      "ProductDiscountType": "Percentage",
      "ProductTax": 20,
      "ProductTaxType": "Percentage",
      "ProductShippingCharge": 20,
      "ProductShippingChargeType": "Percentage",
      "ProductShippingTime": "1-2 days",
      "ProductShippingTimeType": "Days",
      "ProductShippingLocation": "Location 1",
      "ProductShippingLocationType": "Country",
      "ProductShippingReturnPolicy": "Return Policy 1",
      "ProductShippingReturnPolicyType": "Days",
      "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
      "ProductShippingReturnPolicyDescriptionType": "Days",
      "ProductReviews": [
          {
              "ReviewId": 1,
              "Name": "Harshal Jain",
              "Email": "",
              "Rating": 5,
              "Date": "2021-08-01",
              "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          {
              "ReviewId": 2,
              "Name": "Viraj",
              "Email": "",
              "Rating": 1,
              "Date": "2021-08-01",
              "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              "ReviewId": 3,
              "Name": "Harshal Jain",
              "Email": "",
              "Rating": 4,
              "Date": "2021-08-01",
              "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          }
      ]
  },
  {
      "ProductId": 3,
      "ProductName": "Roti Keju",
      "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "ProductImage": [
          {
              id: 1,
              image: rotikeju
          },
          {
              id: 2,
              image: rotikeju
          },
          {
              id: 3,
              image: rotikeju
          }
      ],
      "ProductCode": "P1",
      "ProductCategory": "Category 1",
      "ProductSubCategory": "Sub Category 1",
      "ProductBrand": "Brand 1",
      "ProductColor": "Color 1",
      "ProductSize": "Size 1",
      "ProductWeight": "Weight 1",
      "ProductMaterial": "Material 1",
      "ProductQuantity": 10,
      "ProductUnit": "Unit 1",
      "ProductPrice": 100,
      "SalesPrice": 70,
      "ProductDiscount": 30,
      "ProductDiscountType": "Percentage",
      "ProductTax": 20,
      "ProductTaxType": "Percentage",
      "ProductShippingCharge": 20,
      "ProductShippingChargeType": "Percentage",
      "ProductShippingTime": "1-2 days",
      "ProductShippingTimeType": "Days",
      "ProductShippingLocation": "Location 1",
      "ProductShippingLocationType": "Country",
      "ProductShippingReturnPolicy": "Return Policy 1",
      "ProductShippingReturnPolicyType": "Days",
      "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
      "ProductShippingReturnPolicyDescriptionType": "Days",
      "ProductReviews": [
          {
              "ReviewId": 1,
              "Name": "Harshal Jain",
              "Email": "",
              "Rating": 5,
              "Date": "2021-08-01",
              "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          {
              "ReviewId": 2,
              "Name": "Viraj",
              "Email": "",
              "Rating": 1,
              "Date": "2021-08-01",
              "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              "ReviewId": 3,
              "Name": "Harshal Jain",
              "Email": "",
              "Rating": 4,
              "Date": "2021-08-01",
              "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          }
      ]
  },
  ];

  return (
    <div className='allproducts' style={{marginTop: "20px"}}>
      <h1>Breads</h1>
      <div className='products'>
        {products.map((item,index) => {
          return (
            <CakeCard data={item} key={index}/>
          )
        })}
      </div>
    </div>
  );
}

export default BreadPageCategories;
