<?php
namespace Drupal\reserve_movies\Controller;
use \Drupal\node\Entity\Node;
use Symfony\Component\HttpFoundation\Request;
use \Drupal\Core\Ajax\AjaxResponse;
use \Drupal\Core\Ajax;


class MovieReservationController {
    public function showMovies() {
       $request = new Request( 
         $_GET,
         $_POST,
         array(),
         $_COOKIE,
         $_FILES,
         $_SERVER
      );
       $movie_genres = \Drupal::entityTypeManager()
          ->getStorage('taxonomy_term')
          ->loadByProperties(['vid' => 'movie_type']);
       $genre_id= $request->query->get('genre');
       $query = \Drupal::entityQuery('node')
          ->condition('type', 'movie')
          ->sort('created','DESC');
          if($genre_id != 0 && isset($genre_id)){
            $query->condition('field_genre', $genre_id);
          }   
       $movies = Node::loadMultiple($query->execute());
        return array(
             '#theme' => 'movie-list',
             '#movies' => $movies,
             '#title' => 'List of movies',
             '#genres' => $movie_genres
         );
    }
}
