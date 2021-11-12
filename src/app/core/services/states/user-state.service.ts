import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserApiService } from '../apis/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  public userProfile$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private readonly userApiService: UserApiService) {}

  public getUserProfileByUsername(username: any) {
    return this.userApiService.getProfile(username).pipe(
      map((data: any) => data),
      catchError((err) => err)
    );
  }

  public followUserByUsername(username: any) {
    return this.userApiService.followUser(username).pipe(
      map((data: any) => data),
      catchError((err) => err)
    );
  }

  public unFollowUserByUsername(username: any) {
    return this.userApiService.unfollowUser(username).pipe(
      map((data: any) => data),
      catchError((err) => err)
    );
  }
}
