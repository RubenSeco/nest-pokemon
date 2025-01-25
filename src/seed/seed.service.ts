import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-resp.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adatper';

@Injectable()
export class SeedService {

  constructor(
    // Inject the Mongoose model (inyeccion de dependencia)
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,

  ) { }



  async executeSeed() {

    await this.pokemonModel.deleteMany({}); // delete all

    const data = await this.http.get<PokeResponse>("https://pokeapi.co/api/v2/pokemon?limit=650");

    const pokemonToInsert: { name: string, nro: number; }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split("/");
      const nro = +segments[segments.length - 2];
      pokemonToInsert.push({ name, nro });

      // console.log({ name, nro });

      // try {
      //   const pokemon = await this.pokemonModel.create({ name, nro });
      //   return console.log(pokemon);

      // } catch (error) {
      //   this.handleException(error);
      // }

    });
    await this.pokemonModel.insertMany(pokemonToInsert);
    return "Seed executed";

  }

  // private handleException(error: any) {

  //   if (error.code === 11000) {
  //     throw new BadRequestException(`Pokemon already exists in db ${JSON.stringify(error.keyValue)}`);
  //   }
  //   console.log(error);
  //   throw new InternalServerErrorException(`Can't create pokemon - check logs`);
  // }


}




