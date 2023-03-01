import { Controller, Post, Body, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";
@Controller('products')


export class ProductsController{

  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string, 
    @Body('description') prodDescription: string, 
    @Body('price') prodPrice: number, 
  
  ) : any{

    const generateId = this.productsService.insertProduct(
      prodTitle, 
      prodDescription, 
      prodPrice,
      );
    return {id: generateId}; 


  }
  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
    
  }
}