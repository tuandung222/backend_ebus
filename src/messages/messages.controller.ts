import { Controller } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  async findAll(): Promise<any> {
    return await this.messagesService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.messagesService.findOne(id);
  }
  @Post()
  async create(@Body() data: any): Promise<any> {
    return await this.messagesService.create(data);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any): Promise<any> {
    return await this.messagesService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.messagesService.delete(id);
  }
  
}
