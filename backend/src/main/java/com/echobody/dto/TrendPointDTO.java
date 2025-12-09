package com.echobody.dto;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class TrendPointDTO {
    private String date;
    private int score; // or calories/value
}
