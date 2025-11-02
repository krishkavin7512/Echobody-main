package com.echobody.dto;

import lombok.Data;

@Data
public class UserDto {
  private String id;
  private String name;
  private String email;
  private Integer age;
  private Integer height_cm;
  private Integer weight_kg;
  private String goal;
  private String gender;
}
