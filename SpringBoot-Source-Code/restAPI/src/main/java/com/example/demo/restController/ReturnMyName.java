package com.example.demo.restController;
import org.springframework.web.bind.annotation.*;

/**
 * create by gsharew
 */

@RestController
@RequestMapping("/Users")
public class ReturnMyName {
    @RequestMapping("/Client")
    public String hiToAll()
    {
         return "Hi, Welcome Client";
    }

    @RequestMapping("/Admin")
    public String hiAdmin()
    {
         return "Hi, Welcome Admin this is me";
    }

    @RequestMapping("/Moderator")
    public String hiModerator()
    {
         return "Hi, Welcome Moderator";
    }

}

