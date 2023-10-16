package de.neuefische.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<GithubUser, String> {
}
