package de.neuefische.backend;

import org.springframework.security.core.GrantedAuthority;

import java.util.List;
import java.util.Map;

/*
Datenbank Eintrag:
Angabe der Authority Classe ist wichtig!

{
  "_id": "62606044",
  "name": "Flooooooooooorian",
  "authorities": [
    {
      "role": "ADMIN",
      "_class": "org.springframework.security.core.authority.SimpleGrantedAuthority"
    }
  ],
  "_class": "de.neuefische.backend.GithubUser"
}
 */

public record GithubUser(
        String id,
        String name,
        List<GrantedAuthority> authorities
) {

    public GithubUser(Map<String, Object> attributes) {
        this(attributes.get("id").toString(), attributes.get("login").toString(), List.of());
    }

    public GithubUser(Map<String, Object> attributes, List<GrantedAuthority> authorities) {
        this(attributes.get("id").toString(), attributes.get("login").toString(), authorities);
    }
}
