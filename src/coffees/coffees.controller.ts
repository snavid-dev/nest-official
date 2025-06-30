import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'Hello World';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Hello World #${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
