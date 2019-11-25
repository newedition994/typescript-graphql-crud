import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field
} from "type-graphql";
import { Movie } from "../entity/Movie";

@InputType()
class MovieInput {
  @Field()
  title: string;

  @Field(() => Int)
  minutes: number;
}

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
    await Movie.insert(options);
    return true;
  }

  @Query(() => [Movie])
  movies() {
    return Movie.find();
  }
}
