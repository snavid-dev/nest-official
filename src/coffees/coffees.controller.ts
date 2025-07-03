import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return `limit ${limit} offset ${offset}...`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Hello World #${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, body) {
    return `Hello World update #${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Hello World deleted #${id}`;
  }
}
