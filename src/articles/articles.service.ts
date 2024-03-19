import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private _prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this._prisma.article.create({ data: createArticleDto });
  }

  findDrafts() {
    return this._prisma.article.findMany({ where: { published: false } });
  }

  findAll() {
    return this._prisma.article.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return this._prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this._prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this._prisma.article.delete({ where: { id } });
  }
}
