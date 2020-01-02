namespace DatingApp.API.Model
{
    public class User
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}