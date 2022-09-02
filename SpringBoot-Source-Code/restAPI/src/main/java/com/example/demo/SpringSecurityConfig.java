package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

// Annotation
@EnableWebSecurity
// Class
public class SpringSecurityConfig
        extends WebSecurityConfigurerAdapter {

    // Annotation
    @Override
    protected void
    configure(AuthenticationManagerBuilder auth)
            throws Exception
    {
        auth.inMemoryAuthentication().withUser("Getachew").password("Sharew").roles("ADMIN");
        auth.inMemoryAuthentication().withUser("Bereket").password("Abebe").roles("CLIENT");
        auth.inMemoryAuthentication().withUser("Abedi").password("Developer").roles("MODERATOR");
    }

    // Annotation
    @Override
    // Method
    protected void configure(HttpSecurity http)
            throws Exception
    {
        String[] roles = {"ADMIN", "MODERATOR"};
        http.cors().and().csrf().disable()
                .authorizeRequests().antMatchers("/Users/Client").permitAll().and()
                .authorizeRequests().antMatchers("/Users/Moderator").hasAnyRole(roles).and().httpBasic().and()
                .authorizeRequests().antMatchers("/Users/Admin").hasAnyRole("ADMIN").anyRequest().fullyAuthenticated().and().httpBasic();
    }

    // Annotation
    @Bean
    // Method
    public NoOpPasswordEncoder passwordEncoder()
    {
        return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
    }
}
