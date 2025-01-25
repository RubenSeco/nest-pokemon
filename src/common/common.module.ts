import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adatper';

@Module({

  providers: [AxiosAdapter],
  exports: [AxiosAdapter],

})
export class CommonModule {

}
