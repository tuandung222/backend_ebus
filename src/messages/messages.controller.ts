import { Controller } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@Controller('users/:userID/messages')
@ApiTags('Messages (Tin nhắn người dùng)')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  async findWithUserIds(userID: string): Promise<any> {
    return await this.messagesService.findWithUserIds(userID);
  }
  @Get()
  async findAll(@Param('userID') userID: string): Promise<any> {
    return await this.messagesService.findAll(userID);
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
