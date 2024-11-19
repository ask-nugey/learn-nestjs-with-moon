import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/app.module';

async function bootstrap() {
	try {
		const app = await NestFactory.create(AppModule);
		await app.listen(3000);
	} catch (error) {
		console.error('An error occurred while starting the application:', error);
		throw new Error('Application failed to start');
	}
}

await bootstrap();
