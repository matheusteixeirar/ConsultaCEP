package com.cep.controller;


import com.cep.dto.CepDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.lang.model.util.Elements;

@CrossOrigin(origins = "http://127.0.0.1:5500") // conecta com o front end
@RestController
@RequestMapping("cep")
public class CepController {

    @GetMapping("{cep}")
    public CepDTO consultaCep(@PathVariable("cep") String cep) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<CepDTO> responseEntity = restTemplate.getForEntity("https://viacep.com.br/ws/"+cep+"/json/", CepDTO.class);
        // converte os dados da api viacep (que estao em json) para uma instancia da classe CepDTO
        return responseEntity.getBody();
    }

}
