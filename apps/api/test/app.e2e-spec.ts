/* eslint-disable unicorn/prevent-abbreviations */
import { AppModule } from '@/app.module';
import { type INestApplication } from '@nestjs/common';
import { Test, type TestingModule } from '@nestjs/testing';
import supertest from 'supertest';

describe('AppController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/ (GET)', () => supertest(app.getHttpServer()).get('/').expect(200).expect('Hello World!'));
});
