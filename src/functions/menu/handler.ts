import { formatJSONSuccessResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { mongodbconnect } from '@core/utils/mongodb_connection'
import { ProductRepository } from '@core/repositories/ProductRepository'
import { MongoDBProductRepository } from '@core/repositories/database/MongoDBProductRepository'

const menu: APIGatewayProxyHandler = async (context) => {
  await mongodbconnect()
  const {restaurant_code} = context.headers
  const productRepository: ProductRepository = new MongoDBProductRepository()
  const products = await productRepository.fetchMenu(restaurant_code)
  return formatJSONSuccessResponse({
    success: true,
    payload: products,
    message: "GET Menu by restaurant code"
  });
}

export const main = middyfy(menu);