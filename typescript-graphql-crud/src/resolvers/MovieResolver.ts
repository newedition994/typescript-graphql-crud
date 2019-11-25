import { Resolver, Mutation, Arg } from "type-graphql";

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  createMovie(@Arg("title", () => String) title: string) {
    return true;
  }
}
