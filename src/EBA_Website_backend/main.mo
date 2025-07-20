import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Principal "mo:base/Principal";

actor {

  type Member = {
    name: Text;
    email: Text;
    phone: Text;
    profession: Text;
  };

  var members: [Member] = [];

  // ✅ Replace with your real principal
  let admin: Principal = Principal.fromText("aaaaa-aa");

  func emailExists(email: Text): Bool {
    for (member in members.vals()) {
      if (member.email == email) {
        return true;
      }
    };
    return false;
  };

  public shared ({ caller }) func submitMember(
    name: Text,
    email: Text,
    phone: Text,
    profession: Text
  ) : async Text {
    if (emailExists(email)) {
      return "⚠️ This email is already registered.";
    };

    let newMember: Member = {
      name = name;
      email = email;
      phone = phone;
      profession = profession;
    };

    members := Array.append(members, [newMember]);
    Debug.print("✅ New member added by " # Principal.toText(caller));
    return "Thank you, " # name # "! You have successfully joined the Egyptian Blockchain Association.";
  };

  public shared query ({ caller }) func getMembers() : async [Member] {
    if (caller != admin) {
      Debug.print("❌ Unauthorized access by: " # Principal.toText(caller));
      return [];
    };
    return members;
  };
};
